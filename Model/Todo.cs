using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vue_example.Model
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
    }
}
