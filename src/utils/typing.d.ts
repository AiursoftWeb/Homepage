declare namespace CTX {
  type MyContextProps = {
    open: boolean;
    content: {
      label: string;
      content?: any;
      md: boolean;
    };
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setContent: React.Dispatch<React.SetStateAction<any>>;
  };
}
