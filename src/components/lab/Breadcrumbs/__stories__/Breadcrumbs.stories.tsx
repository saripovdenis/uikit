import React from 'react';

import {ChevronRight, Flame, House, Rocket} from '@gravity-ui/icons';
import type {Meta, StoryObj} from '@storybook/react';

import {Text} from '../../../Text';
import {Box, Flex} from '../../../layout';
import type {Key} from '../../../types';
import {Breadcrumbs} from '../Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Lab/Breadcrumbs',
    component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <Breadcrumbs.Item>Region</Breadcrumbs.Item>
            <Breadcrumbs.Item>Country</Breadcrumbs.Item>
            <Breadcrumbs.Item>City</Breadcrumbs.Item>
            <Breadcrumbs.Item>District</Breadcrumbs.Item>
            <Breadcrumbs.Item>Street</Breadcrumbs.Item>
        </Breadcrumbs>
    ),
};

export const Events: Story = {
    render: function BreadcrumbsEvents(props) {
        const [currentId, setCurrentId] = React.useState<Key>();
        const items = [
            {id: 1, label: 'Region'},
            {id: 2, label: 'Country'},
            {id: 3, label: 'City'},
            {id: 4, label: 'District'},
            {id: 5, label: 'Street'},
        ];
        return (
            <div>
                <Breadcrumbs {...props} onAction={setCurrentId}>
                    {items.map((i) => (
                        <Breadcrumbs.Item key={i.id}>{i.label}</Breadcrumbs.Item>
                    ))}
                </Breadcrumbs>
                <p>You clicked item ID: {currentId}</p>
            </div>
        );
    },
};

export const Links: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <Breadcrumbs.Item href="https://gravity-ui.com" target="_blank">
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="https://gravity-ui.com/components" target="_blank">
                Components
            </Breadcrumbs.Item>
            <Breadcrumbs.Item
                href="https://gravity-ui.com/components/uikit/breadcrumbs"
                target="_blank"
            >
                Breadcrumbs
            </Breadcrumbs.Item>
        </Breadcrumbs>
    ),
};

export const RootContext: Story = {
    render: (args) => (
        <Box overflow="hidden" width={200}>
            <Breadcrumbs {...args} showRoot>
                <Breadcrumbs.Item key="home">Home</Breadcrumbs.Item>
                <Breadcrumbs.Item key="trendy">Trendy</Breadcrumbs.Item>
                <Breadcrumbs.Item key="2020 assets">March 2020 Assets</Breadcrumbs.Item>
                <Breadcrumbs.Item key="winter">Winter</Breadcrumbs.Item>
                <Breadcrumbs.Item key="holiday">Holiday</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    ),
};

export const Separator: Story = {
    render: (args) => {
        const breadcrumbs = [
            <Breadcrumbs.Item key={1}>uikit</Breadcrumbs.Item>,
            <Breadcrumbs.Item key={2}>components</Breadcrumbs.Item>,
            <Breadcrumbs.Item key={3}>Breadcrumbs</Breadcrumbs.Item>,
        ];
        return (
            <div>
                <Breadcrumbs {...args} separator="›">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs {...args} separator="—">
                    {breadcrumbs}
                </Breadcrumbs>
                <Breadcrumbs {...args} separator={<ChevronRight />}>
                    {breadcrumbs}
                </Breadcrumbs>
            </div>
        );
    },
};

export const WithIcons: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <House /> uikit
                </Flex>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <Flame /> components
                </Flex>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <Rocket style={{minWidth: 16}} />
                    <Text ellipsis variant="inherit">
                        Breadcrumbs
                    </Text>
                </Flex>
            </Breadcrumbs.Item>
        </Breadcrumbs>
    ),
};
