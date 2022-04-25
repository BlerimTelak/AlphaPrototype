using AlphaPrototypeNET.Models;

namespace AlphaPrototypeNET.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<Student>> GetAllStudentsAsync();
        Task<Student> GetStudentByIdAsync(Guid id);
    }
}
