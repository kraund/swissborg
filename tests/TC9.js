describe('SwissBorg Task 1', function () {

    ////enter any 2-digit integer to get correct calculation
    const numbersToTest = [10, 15, 20, 21, 22, 99]

    numbersToTest.forEach((testValue) => {
        it(`Testing the factorial of ${testValue} from the page`, async function () {
            await browser.url('/')

            const textField = await browser.$(selector.textField)
            await textField.addValue(testValue)

            const calculateButton = await browser.$(selector.calculateButton)
            await calculateButton.click()
            await browser.waitUntil(
                async () => {
                    const messageObj = await browser.$(selector.messageBody)
                    const messageText = await messageObj.getText()
                    return messageText.length > 0
                }, {
                    timeout: 2000
                }
            )

            const outputTextObj = await browser.$(selector.messageBody)
            const outputText = await outputTextObj.getText()
            const expectedValue = await nxutils.factorialize(testValue)

            expect(outputText).to.eq(expectedValue)
        });
    })
});