import Letra from '../components/Letra'
import LetraModel from '../model/LetraModel'
import {render, userEvent, screen}  from './index'
import '@testing-library/user-event'

const letra = 'A'

describe("Letra", () => {
    // 1. Comecar nao revelada
    it('should start unrevealed', () => {

        render(<Letra letra={new LetraModel(letra, '')} />)

        expect(screen.queryByText(letra)).not.toBeInTheDocument();
        
    })
    
    // 2. Mostrar a letra ao apertar
    it('should show letter after pressed', () => {
        render(<Letra letra={new LetraModel(letra, '')} />)
        
        expect(screen.queryByText(letra)).not.toBeInTheDocument();
        
        const letraSquare = screen.getByTitle('letra')
        
        userEvent.click(letraSquare)
        
        expect(screen.queryByText(letra)).toBeInTheDocument();


    })


})