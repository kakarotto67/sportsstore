using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;

namespace SportsStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly DataContext context;

        public HomeController(DataContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            ViewBag.Message = "Sports Store App";

            var model = context.Products.FirstOrDefault();

            return View(model);
        }
    }
}