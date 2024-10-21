const Fragmentos = () =>{
const item = ['Bola', 'Lapis', 'Folha']

return(
    <>
    <ul>
        {item.map((itens, index)=>
            <li key={index}>{itens}</li>
        )}
    </ul>
    <p>Itens</p>

    </>
)
}
export default Fragmentos