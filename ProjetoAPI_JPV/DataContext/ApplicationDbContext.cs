using Microsoft.EntityFrameworkCore;
using ProjetoAPI_JPV.Models;

namespace ProjetoAPI_JPV.DataContext
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<PessoaModel> Pessoa { get; set; }

    }
}
