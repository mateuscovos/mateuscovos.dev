import { Avatar, Box, Flex, Text, Stack, Heading, HStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export const Career = () => {
    const { t } = useTranslation(['common'])

    return (
        <Flex
            marginTop="10%"
            align="center"
            wrap='wrap'
        >
            <Text textAlign='justify'>{t('career_first')}</Text>
            <Text textAlign='justify' marginTop={5}>{t('career_second')}</Text>
        </Flex>
    )
}