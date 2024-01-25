export interface DispatcherType {
  isButtonVisible: boolean;
  setButtonVisibility: (value: React.SetStateAction<boolean>) => void;
  isFormVisible: boolean;
  setFormVisibility: (value: React.SetStateAction<boolean>) => void;
}

export interface LayoutProps {
  children?: React.ReactNode | JSX.Element;
}

export interface HeaderProps {
  isButtonVisible?: boolean;
  toggleButtonVisibility?: () => void;
  isFormVisible?: boolean;
  toggleFormVisibility?: () => void;
  screenWidth: number;
}

export interface HomePageProps {
  title: string;
}
