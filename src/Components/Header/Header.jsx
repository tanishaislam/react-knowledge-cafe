import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between container mx-auto my-8 border-b-2 items-center pb-7'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;