import React from 'react';
import Container from '@material-ui/core/Container';

function PageContainer({children, ...props}) {
    return <Container maxWidth="md">
        {children}
    </Container>
}

export default PageContainer
