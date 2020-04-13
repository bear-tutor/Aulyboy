api
MovieController
GET GetAllMovies(): MovieDetail[*]
    /api/movie

GET GetMovieById(id: string): MovieDetail
    /api/movie/{id}

UserController
GET GetAllUsers(): User[*]    // 
    /api/user

--------------------------------------
model
-MovieDetail
    [{
        _id: string,
        Name: string,
        ImageUrl: string,
        Description: string

    }]
    
-User
    [{
        _id: string,
        Name: string,
        ImageUrl: string,
    }]