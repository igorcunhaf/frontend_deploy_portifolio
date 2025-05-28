export default function ContactForm({ onSubmit, status }) {
    return (
      <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Mensagem"
          className="textarea textarea-bordered w-full"
          rows={4}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Enviar
        </button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    )
  }