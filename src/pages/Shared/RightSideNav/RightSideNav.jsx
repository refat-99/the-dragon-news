import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { GoogleAuthProvider, getAuth,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { useContext } from 'react';
import { authContext } from '../../../Provider/AuthProvider';



// const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const RightSideNav = () => {
    const {gitLogIn,googleLogIn} = useContext(authContext);



     // github sign in function
     const handleSignUpGithub = () =>{
        // signInWithPopup(auth, githubProvider)
            gitLogIn()
            .then((result) =>{
                console.log(result)
            })
            .catch((error) =>{
                console.log(error.massage)
            })
        }

    // google sign in function
    const handleSignUpGoogle = () =>{
        // signInWithPopup(auth, googleProvider)
        googleLogIn()
            .then((result )=> 
                console.log(result)
                )
            .catch((error) => {
                const massage = error.massage;
                console.log(massage)
            })
   
    }
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button onClick={handleSignUpGoogle} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button onClick={handleSignUpGithub} className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;