export function Form() {
  return (
    <form
      action='https://formsubmit.co/anderson.carro.95@gmail.com'
      method='POST'
      className='max-w-xl mx-auto space-y-4 text-left'
    >
      <input type='hidden' name='_captcha' value='false' />
      <input
        type='text'
        name='name'
        placeholder='Seu nome'
        required
        className='w-full p-2 rounded bg-zinc-800 text-white'
      />
      <input
        type='email'
        name='email'
        placeholder='Seu email'
        required
        className='w-full p-2 rounded bg-zinc-800 text-white'
      />
      <textarea
        name='message'
        placeholder='Sua mensagem'
        rows={5}
        required
        className='w-full p-2 rounded bg-zinc-800 text-white'
      ></textarea>
      <button
        type='submit'
        className='bg-violet-500 px-6 py-2 rounded text-white hover:bg-violet-600'
      >
        Enviar
      </button>
    </form>
  );
}
