using AlphaPrototypeNET.Data;
using AlphaPrototypeNET.Exceptions;
using AlphaPrototypeNET.Models;
using AlphaPrototypeNET.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlphaPrototypeNET.Services
{
    public class StudentService : IStudentService
    {
        private readonly ApplicationDbContext _context;

        public StudentService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await _context.Students.Include(s => s.Department).ToListAsync();
        }

        public async Task<Student> GetStudentByIdAsync(Guid id)
        {

            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                throw new ObjectNotFoundException();
            }

            return student;
        }

    }
}
