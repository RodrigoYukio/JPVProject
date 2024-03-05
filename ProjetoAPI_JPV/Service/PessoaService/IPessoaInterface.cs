using ProjetoAPI_JPV.Models;

namespace ProjetoAPI_JPV.Service.PessoaService
{
    public interface IPessoaInterface
    {
        Task<ServiceResponse<List<PessoaModel>>> GetPessoas();
        Task<ServiceResponse<PessoaModel>> GetPessoaById(int id);
        Task<ServiceResponse<List<PessoaModel>>> CreatePessoa(PessoaModel novaPessoa);
        Task<ServiceResponse<List<PessoaModel>>> UpdatePessoa(PessoaModel editadoFuncionario);
        Task<ServiceResponse<List<PessoaModel>>> DeletePessoa(int id);
    }
}
