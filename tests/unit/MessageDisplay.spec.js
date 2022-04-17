import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => jest.clearAllMocks())

describe('MessageDisplay', () => {
    it('Calls getMessage and displays message', async () => {
        //Arrange
        let mockMessage = "Hello from the other side"
        getMessage.mockResolvedValueOnce({ text: mockMessage })
        let wrapper = mount(MessageDisplay)
        // Act
        // wait for promise to resolve
        await flushPromises()
        //Assert
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays message
        let actualMessage = wrapper.find('[data-testid="message"]').element.textContent
        expect(actualMessage).toEqual(mockMessage)
    })

    it('Displays an error when getMessage call fails', async () => {
        //Arrange
        let mockError = 'Oops! Something went wrong.'
        getMessage.mockRejectedValueOnce({text: mockError})
        let wrapper = mount(MessageDisplay)
        //Act
        // wait for promise to resolve
        await flushPromises()
        //Assert
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays error
        let actualError = wrapper.find('[data-testid="message-error"]').element.textContent
        expect(actualError).toEqual(mockError)
    })
})