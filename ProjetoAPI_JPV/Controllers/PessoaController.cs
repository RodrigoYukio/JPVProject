using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoAPI_JPV.Models;
using ProjetoAPI_JPV.Models;
using ProjetoAPI_JPV.Service.PessoaService;

namespace ProjetoAPI_JPV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly IPessoaInterface _pessoaInterface;
        public PessoaController(IPessoaInterface pessoaInterface)
        {
            _pessoaInterface = pessoaInterface;
        }

        [HttpGet("buscar-todos")]
        public async Task<ActionResult<ServiceResponse<List<PessoaModel>>>> GetPessoas()
        {
            return Ok(await _pessoaInterface.GetPessoas());
        }

        [HttpGet("id")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> GetPessoaById(int id)
        {
            ServiceResponse<PessoaModel> serviceReponse = await _pessoaInterface.GetPessoaById(id);

            return Ok(serviceReponse);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<PessoaModel>>>> CreatePessoa(PessoaModel novaPessoa)
        {
            return Ok(await _pessoaInterface.CreatePessoa(novaPessoa));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<PessoaModel>>>> UpdatePessoa(PessoaModel pessoaAlteracao)
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = await _pessoaInterface.UpdatePessoa(pessoaAlteracao);

            return Ok(pessoaAlteracao);
        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<PessoaModel>>>> DeletePessoa(int id)
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = await _pessoaInterface.DeletePessoa(id);

            return Ok(serviceReponse);
        }
    }
}