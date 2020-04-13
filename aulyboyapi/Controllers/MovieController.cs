using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aulyboyapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace aulyboyapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase

    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Moviedetail> Get()
        {
            var movies = new Moviedetail[]
            {
                new Moviedetail{_id =  "p01", Name = "ไซตามะ", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRY9bMq4kHtIcAO8iHZVB_jXQlLI2QqSKUL7eyrg806X6Qd4Y5z&usqp=CAU"},
                new Moviedetail{_id =  "p02", Name = "โดเรม่อน", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx0NiCFzDWvKdi-01dsGWa4s59qzkCrB-majX6OTKiZ6lBHQ1S&usqp=CAU"},
                new Moviedetail{_id =  "p03", Name = "เทพมรณะ", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLmwSH9kvLxcIKN2RrZSGSevrh8lV6NKadMfGkEOBijMnCzG5n&usqp=CAU"}
            };
            return movies;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Moviedetail Get(string id)
        {
            var findDetail = Get().FirstOrDefault(it => it._id == id);
            return findDetail;
        }
    }
}
