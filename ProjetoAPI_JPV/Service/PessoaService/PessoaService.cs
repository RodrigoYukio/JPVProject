using Microsoft.EntityFrameworkCore;
using ProjetoAPI_JPV.DataContext;
using ProjetoAPI_JPV.Models;
using System.Collections.Generic;

namespace ProjetoAPI_JPV.Service.PessoaService
{
    public class PessoaService : IPessoaInterface
    {
        private readonly ApplicationDbContext _context;
        public PessoaService(ApplicationDbContext context) 
        { 
            _context = context;
        }  
        public async Task<ServiceResponse<List<PessoaModel>>> CreatePessoa(PessoaModel novaPessoa)
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = new ServiceResponse<List<PessoaModel>>();

            try
            {
                if(novaPessoa == null)
                {
                    serviceReponse.Info = null;
                    serviceReponse.Mensagem = "Informar dados";
                    serviceReponse.Success = false;

                    return serviceReponse;
                }
                _context.Add(novaPessoa);
                await _context.SaveChangesAsync();

                serviceReponse.Info = _context.Pessoa.ToList();

            }catch (Exception ex)
            {
                serviceReponse.Mensagem = ex.Message;
                serviceReponse.Success = false;
            }
            return serviceReponse;
        }

        public async Task<ServiceResponse<List<PessoaModel>>> DeletePessoa(int id)
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = new ServiceResponse<List<PessoaModel>>();

            try
            {
                PessoaModel pessoa = _context.Pessoa.FirstOrDefault(x => x.Id == id);

                if (pessoa == null)
                {
                    serviceReponse.Info = null;
                    serviceReponse.Mensagem = "Pessoa não localizada";
                    serviceReponse.Success = false;
                }


                _context.Remove(pessoa);
                await _context.SaveChangesAsync();

                serviceReponse.Info = _context.Pessoa.ToList();

            }
            catch (Exception ex)
            {
                serviceReponse.Mensagem = ex.Message;
                serviceReponse.Success = false;
            }

            return serviceReponse;
        }

        public async Task<ServiceResponse<PessoaModel>> GetPessoaById(int id)
        {
            ServiceResponse<PessoaModel> serviceReponse = new ServiceResponse<PessoaModel>();

            try
            {
                PessoaModel pessoa = _context.Pessoa.FirstOrDefault(x => x.Id == id);

                if(pessoa == null)
                {
                    serviceReponse.Info = null;
                    serviceReponse.Mensagem = "Pessoa não localizada" ;
                    serviceReponse.Success = false;
                }

                serviceReponse.Info = pessoa;

            }catch (Exception ex) 
            {
                serviceReponse.Mensagem = ex.Message;
                serviceReponse.Success = false;
            }

            return serviceReponse;
        }

        public async Task<ServiceResponse<List<PessoaModel>>> GetPessoas()
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = new ServiceResponse<List<PessoaModel>>();

            try
            {
                serviceReponse.Info = _context.Pessoa.ToList();

                if(serviceReponse.Info.Count < 0)
                {
                    serviceReponse.Mensagem = "Sem dados para retornar";
                }

            } catch(Exception ex)
            {
                serviceReponse.Mensagem = ex.Message;
                serviceReponse.Success = false;
            }
            return serviceReponse;
        }

        public async Task<ServiceResponse<List<PessoaModel>>> UpdatePessoa(PessoaModel editadoFuncionario)
        {
            ServiceResponse<List<PessoaModel>> serviceReponse = new ServiceResponse<List<PessoaModel>>();

            try
            {
                PessoaModel pessoa = _context.Pessoa.AsNoTracking().FirstOrDefault(x => x.Id == editadoFuncionario.Id);


                if (pessoa == null)
                {
                    serviceReponse.Info = null;
                    serviceReponse.Mensagem = "Pessoa não localizada";
                    serviceReponse.Success = false;
                }

                _context.Pessoa.Update(editadoFuncionario);
                await _context.SaveChangesAsync();
                serviceReponse.Info = _context.Pessoa.ToList(); 
            }
            catch(Exception ex)
            {
                serviceReponse.Mensagem = ex.Message;
                serviceReponse.Success = false;
            }

            return serviceReponse;
        }
    }
}
