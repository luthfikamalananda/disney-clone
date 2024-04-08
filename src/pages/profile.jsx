import { Link} from "react-router-dom";

export default function Profile() {

    // CARA REDUNDANT (SPAGET)
    // const auth = useContext(AuthContext);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!auth.credential) {
    //         navigate('/') 
    //     }
    // },[])

    return (
        <>
        <button><Link to='/homepage'>Ayo pukul aku</Link></button>
        </>

        
    )
}