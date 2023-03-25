using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;



namespace SimpleCrudApi.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class ItemContext
    {
        private static List<Item> items = new List<Item>
        {
            new Item { Id = 1, Name = "Item 1", Description = "Description of Item 1" },
            new Item { Id = 2, Name = "Item 2", Description = "Description of Item 2" },
            new Item { Id = 3, Name = "Item 3", Description = "Description of Item 3" }
        };

        public List<Item> GetAll()
        {
            return items;
        }

        public Item Get(int id)
        {
            return items.Find(i => i.Id == id);
        }

        public void Add(Item item)
        {
            items.Add(item);
        }

        public void Update(int id, Item item)
        {
            int index = items.FindIndex(i => i.Id == id);
            items[index] = item;
        }

        public void Delete(int id)
        {
            items.RemoveAll(i => i.Id == id);
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly ItemContext _context;

        public ItemController(ItemContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Item>> GetAll()
        {
            return _context.GetAll();
        }

        [HttpGet("{id}", Name = "GetItem")]
        public ActionResult<Item> GetById(int id)
        {
            var item = _context.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(Item item)
        {
            _context.Add(item);
            return CreatedAtRoute("GetItem", new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Item item)
        {
            var existingItem = _context.Get(id);
            if (existingItem == null)
            {
                return NotFound();
            }

            _context.Update(id, item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _context.Get(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Delete(id);
            return NoContent();
        }
    }
}
