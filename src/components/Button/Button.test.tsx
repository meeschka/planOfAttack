import TestRenderer from 'react-test-renderer'
import Button from './Button'

describe('button', () => {
    const testRenderer = TestRenderer.create(<Button type="primary" size="sm" text="Hello" onPress={()=>'pressed'} />);
    const testInstance = testRenderer.root
    console.log(testInstance)
    it('should correctly pass props', () => {
        console.log(testInstance)
        expect(testInstance.findByType(Button).props.type).toBe("primary")
    })

    // it('should contain a text element that matches the text prop', () => {
    //     expect(testInstance.findByType(Text).props.children).toBe("Hello")
    // })
})