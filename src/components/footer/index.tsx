import React from 'react'
import {
    Box,
    Flex,
    HStack,
    Icon,
    Text,
} from '@chakra-ui/react'
import { RiTelegramFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { IconLink } from '../iconLink'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
    const { t } = useTranslation(['common'])

    return (
        <Flex
            p={6}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Text p={2}>{t('footer')}</Text>
            <Flex align="center" gap={3}>
                <IconLink href="mailto: hello@mateuscovos.dev" fontSize="1.3rem" icon={SiGmail} />
                <IconLink href="https://t.me/mateuscovos" fontSize="1.3rem" icon={RiTelegramFill} />
            </Flex>
        </Flex>
    )
}
