import { Text } from '@deriv-com/ui'
import QRCode from 'qrcode.react'

export const QRCodeRedirect = () => {
    return (
        <div className="flex flex-col gap-16 justify-center border-1 border-solid border-brand-secondary-neutral w-[166px] rounded-lg items-center">
            <QRCode
                value="https://static.deriv.com/scripts/storeRedirect?app=partnershub"
                size={90}
            />
            <Text size="sm" className="pt-2" align="center">
                Scan to download mobile app
            </Text>
        </div>
    )
}
