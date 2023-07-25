const image = (width, higth) => {
  if (width > higth) {
    console.log('Horizontal');
  } else {
    console.log('Vertical');
  }
}

image(200, 800);
