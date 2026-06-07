import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const Users = [
    {
      id: '1',
      name: 'Rodolfo',
      age: 33,
      email: 'rod@gmail.com'
    },
    {
      id: '2',
      name: 'Ana',
      age: 17,
      email: 'ana@gmail.com'
    }
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text'/>
        <input placeholder='Idade' name='idade' type='number'/>
        <input placeholder='Email' name='email' type='email'/>
        <button type='button'>Cadastrar</button>
      </form>


      {Users.map(u => (
        <div key={u.id} className='card'>
          <div>
            <p>Nome: <span>{u.name}</span></p>
            <p>Idade: <span>{u.age}</span></p>
            <p>Email: <span>{u.email}</span></p>
          </div>

          <div>
            <button>
              <img src={Trash} alt="" />
            </button>
          </div>
        </div>
      ))}

     </div>  
  )
}

export default Home
