namespace AlphaPrototypeNET.Models
{
    public class Student
    {
        public Guid? Id { get; set; }
        public string? Name { get; set; }
        public Department? Department { get; set; }
        public Guid? DepartmentId { get; set; }

    }
}
