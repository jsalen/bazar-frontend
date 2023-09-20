type Heading = {
  children: React.ReactNode;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({ children, className, as, ...props }: Heading) => {
  const Tag = as;

  const headingClasses = () => {
    switch (as) {
      case 'h1':
        return 'text-3xl lg:text-4xl';
      case 'h2':
        return 'text-2xl lg:text-3xl';
      case 'h3':
        return 'text-xl lg:text-2xl';
      default:
        return 'text-lg lg:text-xl';
    }
  };

  return (
    <Tag
      className={`font-bold text-lightText ${headingClasses()} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
