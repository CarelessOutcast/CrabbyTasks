import { Link } from 'react-router-dom';
import background from "../images/landing-bg.jpg";

const LandingPage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"
    }

    return (
        <div className="LandingPage">
        <div style= {backgroundImageStyle}>
        <div className="bg-gradient-to-r from-boxdark">
            <div className= "flex h-screen ">
                <div className="m-auto">
                    <div className= "mb-8">
                    <div className='flex justify-center'>
                        <h1 className="text-5xl text-whiteGray font-bold">
                            Welcome to CrabbyTasks, your new best friend!
                        </h1>
                    </div>
                    </div>
                    <div className = "mb-8">
                    <div className='flex justify-center'>
                        <h3 className="max-w-2xl text-2xl text-center text-whiteGray font-regular">
                            CrabbyTasks is an easy-to-use and engaging scheduling manager, a To-Do list that thrives as you do when you complete your daily tasks.
                        </h3>
                    </div>
                    </div>
                    <div className= "mb-8">
                    <div className='flex justify-center'>
                        <p className="text-2xl text-secondary font italic">
                           Are you ready to fulfill your dreams... and get things done?
                        </p>
                    </div>
                    </div>
                    <div className= "mb-16">
                    <div className='flex justify-center'>
                        <Link
                        to="/taskmanager"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary py-4 px-10 text-center font-bold text-white hover:bg-opacity-500 lg:px-8 xl:px-10"
                        >
                            Task Manager
                        </Link>
                    </div>
                    </div>
                    
                </div>
            </div>  
        </div>
        </div>
        </div>

    )
}

export default LandingPage;