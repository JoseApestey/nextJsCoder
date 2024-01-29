import './globals.css';

import Header from '@/components/header/Header';



export const metadata = {
	title: 'Capellari!',
	description: 'Pagina de inicio de Capellari',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
			    
					
						<Header />
						<div className="bg-body pt-3 min-h-screen">
							{children}
						</div>
					
				
			</body>
		</html>
	)
}