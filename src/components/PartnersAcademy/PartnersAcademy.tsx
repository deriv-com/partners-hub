import { HandWithPhoneComponent } from '../HandWithPhone/HandWithPhone'
import { MarketingBubbles } from '../MarketingBubbles/MarketingBubbles'
import { QRCodeRedirect } from '../QRCode/QRCode'
import { useDevice, Button, Text } from '@deriv-com/ui'

const OpenAcademyApp = () => {
    return (
        <div className="flex justify-between items-start lg:flex-row flex-col gap-8 ">
            <Button
                className="rounded-[100px] w-full lg:w-auto"
                onClick={() =>
                    window.open(
                        'https://login.deriv.com/signin.php?lang=0',
                        '_blank'
                    )
                }
                variant="outlined"
            >
                Open Academy app
            </Button>
        </div>
    )
}

export const PartnersAcademy = () => {
    const { isDesktop } = useDevice()
    return (
        <div className="flex flex-col w-full p-16 gap-16 border-1 rounded-sm border-system-light-disabled-text">
            <Text size="lg" weight="bold" align="left">
                Partner's Academy
            </Text>
            <div className="flex w-full gap-24 lg:flex-row flex-col">
                <HandWithPhoneComponent />
                <MarketingBubbles />
                {isDesktop && <QRCodeRedirect />}
                {!isDesktop && <OpenAcademyApp />}
            </div>
        </div>
    )
}
