﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aulyboyapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace aulyboyapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>()
            {
                new User{_id =  "p01", Name = "ออ", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_j2JyF2LA0pLXHznhU0TtwPeDVnXvS5pVbfhQ-v-NNzXh_EIE&usqp=CAU"},
                new User{_id =  "p02", Name = "เต", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlni4JwyEobjVdSxC-YVEw1OqG_6pu5lyK8GyJYVB_FTrufJs5&usqp=CAU"},
                new User{_id =  "p03", Name = "ปุ๋ย", ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ob0dzHcxfQlRwboKKCc-z96Z36FLdVnqPacgokZBGucHD_0I&usqp=CAU"}
            };


        // GET api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

                // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var deleteUser = users.FirstOrDefault(it => it._id == id);
            if (deleteUser == null)
            {

            }
            users.Remove(deleteUser);
        }

    }
}
