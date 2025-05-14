const ClearObject = () => (
    <div className="relative z-10">
        <div
            className="w-[60px] h-[60px] rounded-full rotate-[100deg]"
            style={{ boxShadow: '9px 9px 0 0 #BCAE76' }}
        />
        <div className="absolute w-[90px] h-[90px] bg-[#BCAE76] rounded-full opacity-10 top-[-5px] left-[-30px]" />
        <div className="absolute w-[110px] h-[110px] bg-[#BCAE76] rounded-full opacity-10 top-[-15px] left-[-40px]" />
        <div className="absolute w-[130px] h-[130px] bg-[#BCAE76] rounded-full opacity-10 top-[-25px] left-[-50px]" />
    </div>
);

export default ClearObject;

