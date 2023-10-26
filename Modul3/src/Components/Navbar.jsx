import { useNavigate } from "react-router-dom"
const Navbar= () => {
    const navigate = useNavigate()
    
    return(
        <>
            <h3>Navbar</h3>
            <button onClick={() => navigate('/')}>HOME</button><br></br>
            <button onClick={() => navigate('/about')}>ABOUT</button><br></br>
            <button onClick={() => navigate('/contact')}>Contact</button><br></br>

        </>
    )
}

export default Navbar




