const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 shadow p-4 text-center text-gray-900 dark:text-white flex justify-center'>
      <p>© {new Date().getFullYear()} Your Company</p>
    </footer>
  );
};

export default Footer;
