import { useState } from 'react'
import './App.css'
import { Overview } from './overview';
import { Text, Tabs, Box, Popover, Button, Flex, Avatar, TextArea, Checkbox, Card, Table } from "@radix-ui/themes";

function App() {

  return (
    <>
    <div className='Topbar'>
    <div>
      <h1 className='MainTitle'>Dashboard</h1>
    </div>


    <Popover.Root>
  <Popover.Trigger>
  <Button style={{ backgroundColor: 'black' }} className='Btn'>
      <div width="15" height="16" />
    Bobr Comment
    </Button>
  </Popover.Trigger>
  <Popover.Content style={{ width: 360 }}>
    <Flex gap="3">
      <Avatar
        size="2"
        src='../../Bilder/bobr1.jpg'
        fallback="A"
        radius="full"
      />
      <Box grow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex gap="3" mt="3" justify="between">
          <Flex align="center" gap="2" asChild>
            <Text as="label" size="2">
              <Checkbox />
              <Text>Send to group</Text>
            </Text>
          </Flex>
          <Popover.Close>
            <Button size="1">Comment</Button>
          </Popover.Close>
        </Flex>
      </Box>
    </Flex>
  </Popover.Content>
</Popover.Root>

</div>

    <Tabs.Root defaultValue="account">
  <Tabs.List className='TabsContainer'>
    <Tabs.Trigger className='Tabs' value="account">Overview</Tabs.Trigger>
    <Tabs.Trigger className='Tabs' value="documents">Analytics</Tabs.Trigger>
    <Tabs.Trigger className='Tabs' value="settings">Reports</Tabs.Trigger>
    <Tabs.Trigger className='Tabs' value="settings">Notifications</Tabs.Trigger>
  </Tabs.List>
  <Box px="4" pt="3" pb="2">
    <Tabs.Content value="account">
    </Tabs.Content>
    <Tabs.Content value="documents">
      <Text size="2">Bobrrr</Text>
    </Tabs.Content>
    <Tabs.Content value="settings">
      <Text size="2">Bobr hey</Text>
    </Tabs.Content>
  </Box>
</Tabs.Root>



<div className='Cards'>
<Card className= 'Card'>
  <Flex gap="3" align="center">
    <Box>

    <div className='TextAndIconWrapper'>

      <Text as="div" className='SmallHeading' size="2">
        Total Revenue
      </Text>

      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="Icons"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>

</div>

      <Text as="div" className='MiddleText'>
        $27,731
      </Text>
      <Text className='SmallestText'>
      +17.7% from last month
    </Text>
    </Box>
  </Flex>
  
</Card>

<Card className= 'Card'>
  <Flex gap="3" align="center">
    <Box>

    <div className='TextAndIconWrapper'>
    <Text as="div" className='SmallHeading' size="2">
        Subscriptions
      </Text>

      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="Icons"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>

                    </div>

      <Text as="div" className='MiddleText'>
        +349
      </Text>
      <Text className='SmallestText'>
      +89.1% from last month
    </Text>
    </Box>
  </Flex>
</Card>

<Card className= 'Card'>
  <Flex gap="3" align="center">
    <Box>

    <div className='TextAndIconWrapper'>
    <Text as="div" className='SmallHeading' size="2">
        Sales
      </Text>

      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="Icons"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>

                    </div>


                    <Text as="div" className='MiddleText'>
        +6,234
      </Text>
      <Text className='SmallestText'>
      +23% from last month
    </Text>
    </Box>
  </Flex>
</Card>

<Card className= 'Card'>
  <Flex gap="3" align="center">
    <Box>

      <div className='TextAndIconWrapper'>
      <Text as="div" className='SmallHeading' size="2">
        Active Now
      </Text>

      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="Icons"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>

      </div>



      <Text as="div" className='MiddleText'>
        +573
      </Text>
      <Text className='SmallestText'>
      +201 since last hour
    </Text>
    </Box>
  </Flex>
</Card>

</div>


<div className='WrapAll'>
<div className='Wrapper'>
<h1 className='Overview'>Overview</h1>
<Overview/>

</div>


<div className='TableContainer'>
  <div className='TitleAndDescriptionContainer'>
    <div className='RecentSales'>Recent Sales</div>
    <div className='SalesText'> 1389 sales this month.</div>
  </div>

  <Table.Root>
  <Table.Body className='TableBody'>
    <Table.Row className='TableRow'>
      <Table.RowHeaderCell className='RowHeaderCell'>
        <img src='../../Bilder/bobr1.jpg' className='Avatars' alt='Avatar'></img>
      </Table.RowHeaderCell>
      <Table.Cell>
        <div className='Name'>Andreas Thor</div>
        <div className='Mail'>Andreasgaming@email.com</div>
      </Table.Cell>
      <Table.Cell>+$5,659.00</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>
        <img src='../../Bilder/bobr1.jpg' className='Avatars' alt='Avatar'></img>
      </Table.RowHeaderCell>
      <Table.Cell>
        <div className='Name'>Brian Oconnor</div>
        <div className='Mail'>Brian.oconnor@email.com</div>
      </Table.Cell>
      <Table.Cell>+$139.00</Table.Cell>
    </Table.Row>

    <Table.Row className='TableRow'>
      <Table.RowHeaderCell className='RowHeaderCell'>
        <img src='../../Bilder/bobr1.jpg' className='Avatars' alt='Avatar'></img>
      </Table.RowHeaderCell>
      <Table.Cell>
        <div className='Name'>Kevin Prapor</div>
        <div className='Mail'>Kevin.prapor@email.com</div>
      </Table.Cell>
      <Table.Cell>+$2,967.00</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>
        <img src='../../Bilder/bobr1.jpg' className='Avatars' alt='Avatar'></img>
      </Table.RowHeaderCell>
      <Table.Cell>
        <div className='Name'>Maddy tarkov</div>
        <div className='Mail'>tarkov101@email.com</div>
      </Table.Cell>
      <Table.Cell>+$877.00</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>
        <img src='../../Bilder/bobr1.jpg' className='Avatars' alt='Avatar'></img>
      </Table.RowHeaderCell>
      <Table.Cell>
        <div className='Name'>Martin Ghurta</div>
        <div className='Mail'>Ghurta365@email.com</div>
      </Table.Cell>
      <Table.Cell>+$567.00</Table.Cell>
    </Table.Row>
    </Table.Body>
  </Table.Root>
  </div>
</div>


    </>
    
  )
}



export default App
