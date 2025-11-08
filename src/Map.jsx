import React from 'react'
// Import necessary components from react-bootstrap
import { Card, Button } from 'react-bootstrap'; 

const Map = () => {
    const objArray = [
        { name: "Hima", Age: 26, Qualification: "MCA" },
        { name: "Ayana", Age: 26, Qualification: "MCA" },
        { name: "Anjana", Age: 26, Qualification: "MCA" },
        { name: "Krishna", Age: 26, Qualification: "MCA" }
    ];

    return (
        // The overall container for the mapped items
        <div className='row' style={{ display: 'flex', flexWrap: 'wrap' }}> 
            {objArray.map((item, index) => { // Added 'index' for key prop
                return (
                    // 1. *Wrapped in a Fragment* (<>...</>) because map must return a single element.
                    // 2. *Added 'key' prop* to the outermost element in the map.
                    <React.Fragment key={index}> 
                        {/* Example 1: The Card component */}
                        <Card style={{ width: '18rem', margin: '15px' }}>
                            {/* NOTE: 'holder.js/100px180' requires the holder.js library, 
                                you might want to use a real image URL or just remove this prop. */}
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Age: {item.Age}, Qualification: {item.Qualification}
                                </Card.Text>
                                <Button variant="primary">View Profile</Button>
                            </Card.Body>
                        </Card>

                        {/* Example 2: The custom styled div */}
                        <div 
                            style={{
                                border: "1px solid black",
                                width: "300px",
                                margin: "15px",
                                textAlign: 'center',
                                padding: "20px",
                                // 3. Corrected "light green" to "lightgreen" or a hex/rgb value
                                backgroundColor: "lightgreen", 
                            }}
                        >
                            <h1>{item.name}</h1>
                            <h3>{item.Age}</h3>
                            <p>{item.Qualification}</p>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default Map;