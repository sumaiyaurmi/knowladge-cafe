import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h3 className="text-3xl font-bold">knowledge</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
