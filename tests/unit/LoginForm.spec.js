import LoginForm from "@/components/LoginForm";
import {mount} from "@vue/test-utils";

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => {
        //Arrange
        let wrapper = mount(LoginForm)
        let input = wrapper.find('[data-testid="name-input"]')
        //Act
        input.setValue('Jeremy')
        wrapper.trigger('submit')
        let formSubmittedCalls = wrapper.emitted('formSubmitted')
        //Assert
        expect(formSubmittedCalls).toHaveLength(1)
        expect(formSubmittedCalls[0][0]).toMatchObject({name:'Jeremy'})
    })
})