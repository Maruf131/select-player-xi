
import banner from '../../images/banner-main.png'
const Header = ({addToMoney}) => {
    return (
        <div className=" flex items-center justify-center h-screen bg-[url('src/images/bg-shadow.png')] bg-cover bg-center">
            <div className="text-center">
            <div className='flex items-center justify-center'>
                <img src={banner} alt="" />
            </div>
            <h1 className='text-4xl font font-extrabold mt-4'>Assemble Your Ultimate <br /> Dream 11 Cricket Team</h1>
            <h3 className='text-xl font-bold mt-5'>Beyond Boundaries Beyond Limits</h3>
            <button onClick={()=>addToMoney(300000)} className='btn btn-warning font-bold mt-7 text-black'>Claim Free Credit</button>
        </div>
        </div>
    );
};

export default Header;