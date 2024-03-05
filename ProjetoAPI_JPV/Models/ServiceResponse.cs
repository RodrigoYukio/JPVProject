namespace ProjetoAPI_JPV.Models
{
    public class ServiceResponse<T>
    {
        public T? Info { get; set; }
        public string Mensagem {  get; set; } = string.Empty;
        public bool? Success { get; set; } = true;
    }
}
