export const Button = ({children}) => {
  return (
    <button className='rounded-lg px-6 py-3 font-medium text-white w-full sm:w-64 text-lg sm:text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg'>{children}</button>
  )
}
