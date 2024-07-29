import { Text } from '@deriv-com/ui'
import { HandWithPhoneComponent } from '../HandWithPhone/HandWithPhone'
import { MarketingBubbles } from '../MarketingBubbles/MarketingBubbles'
import { QRCodeRedirect } from '../QRCode/QRCode'

export const PartnersAcademy = () => {
    return (
        <div className="flex flex-col w-full p-16 gap-16 border-1 rounded-sm border-system-light-disabled-text">
            <Text size="lg" weight="bold" className="mt-10" align="left">
                Partner's Academy
            </Text>
            <div className="flex w-full gap-24">
                <HandWithPhoneComponent />
                <MarketingBubbles />
                <QRCodeRedirect />
            </div>
        </div>
    )
}
