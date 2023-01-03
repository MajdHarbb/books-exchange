<?php
namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Book;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Storage;
use DB;
class BooksController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User 
     */
    public function createBook(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'title' => 'required',
                'seller_id' => 'required',
                'user_address' => 'required',
                'image' => 'required',
                'price' => 'required',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $picture = "no_image.png";

            $book = Book::create([
                'seller_id' => $request->seller_id,
                'buyer_id' => $request->buyer_id,
                'title' => $request->title,
                'author' => $request->author,
                'publisher' => $request->publisher,
                'phone' => $request->phone,
                'user_address' => $request->user_address,
                'picture' => $picture,
                'price' => $request->price,
                'category' => $request->category,
                'school' => $request->school,
                'class' => $request->class,
                'education_year' => $request->education_year,
                'status' => $request->status,
            ]);

            if($request->image != "" && $request->image != null){
                $image_64=$request->image;
                //split to find extension
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1]; 
                $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                $image = str_replace($replace, '', $image_64); 
                $image = str_replace(' ', '+', $image); 
                $book->id.'.'.$extension;
                $imageName = $book->id.'.'.$extension;
                Storage::disk('books')->put($imageName, base64_decode($image));
                Book::where('id', $book->id)->update(array('picture' => $imageName));
            }

            return response()->json([
                'status' => true,
                'message' => 'Book Created Successfully',
                'user' => $book
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getBooks(Request $request){
        try{
            $books = DB::table('books')
            ->select('*','books.id as book_id')
            ->join('users','users.id','=','books.seller_id')
            // ->where('status', '!=' , 'purchased')
            ->where(['status' => null])
            ->get();
            return response()->json([
                'books' => $books
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }

    public function getPurchasedBook(Request $request){
        try{
            $books = DB::table('books')
            ->select('*','books.id as book_id')
            ->join('users','users.id','=','books.seller_id')
            ->where(['books.buyer_id' => $request->buyer_id])
            // ->where(['status' => null])
            ->get();
            return response()->json([
                'books' => $books
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }

    public function getMyBooks(Request $request){
        try{
            $books = DB::table('books')
            ->select('*','books.id as book_id')
            ->join('users','users.id','=','books.seller_id')
            ->where(['books.seller_id' => $request->seller_id])
            // ->where(['status' => null])
            ->get();
            
            return response()->json([
                'books' => $books
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }

    public function getSingleBook(Request $request){
        try{
            $books = DB::table('books')
            ->select('*','books.id as book_id')
            ->join('users','users.id','=','books.seller_id')
            // ->where(['something' => 'something', 'otherThing' => 'otherThing'])
            ->where(['books.id' => $request->book_id])
            ->get();
            return response()->json([
                'book' => $books
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }

    public function purchaseBook(Request $request){
        try{
            $book = Book::where('id', $request->book_id)->first();
            $purchase = Book::where('id', $request->book_id)->update(array(
                'buyer_id' => $request->buyer_id,
                'status' => "purchased",
            ));
            $seller = User::where('id', $request->seller_id)->first();
            $buyer = User::where('id', $request->buyer_id)->first();
            $notification = Notification::create([
                'book_id' => $request->book_id,
                'seller_id' => $request->seller_id,
                'buyer_id' => $request->buyer_id,
                'title' => $buyer->first_name ." ". $buyer->last_name ." bought " .$book->title ." for $". $book->price,
                'status' => "purchase"
            ]);
            return response()->json([
                'text' =>  $buyer->first_name ." ". $buyer->last_name ." bought " .$book->title . " from " . $seller->first_name . " " . $seller->last_name . " for $". $book->price,
                'purchased' => $purchase,
                'book' => $book,
                'notification' => $notification,
                'buyer' => $buyer,
                'seller' => $seller,
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }
}
