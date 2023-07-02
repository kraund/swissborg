describe('SwissBorg Task 1', function () {

    ////enter any 2-digits integer to get correct calculation
    const numbersToTest = [10, 15, 20, 21, 22, 99]

    numbersToTest.forEach((test_value) => {
        it(`Testing the factorial of ${test_value} from the page`, async function () {
            await browser.url('/')

            const text_field = await browser.$(selector.text_field)
            await text_field.addValue(test_value)

            const calculate_button = await browser.$(selector.calculate_button)
            await calculate_button.click()
            await browser.waitUntil(
                async () => {
                    const messageObj = await browser.$(selector.message_body)
                    const message = await messageObj.getText()
                    return message.length > 0
                }, {
                    timeout: 2000
                }
            )

            const outputTextObj = await browser.$(selector.message_body)
            const outputText = await outputTextObj.getText()
            const expectedValue = await nxutils.factorialize(test_value)

            expect(outputText).to.eq(expectedValue)
        });
    })
});