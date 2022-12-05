import Categories from './Categories/Categories';
import CartWidget from '../CartWidget/CartWidget';
import ItemListConteiner from '../ItemListConteiner/ItemListConteiner';
const Navbar = () => {
    return (
      
          
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                   <div className="collapse navbar-collapse">
                    <Categories/>
                    </div>
                  
                    
                    
                      <CartWidget/>
                    </div>
                  
                </nav>
              );
            }
   

export default Navbar;
