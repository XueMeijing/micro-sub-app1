import './index.less'

const Index = () => {
  return (
    <>   
      <h1
        onClick={() => { 
          console.log(1111)
          window.location.hash = '/microReact/main/expenses'
        }}
      >
        ng Expenses
      </h1> 
      <i className="sub-icon fm-company-info"></i>
      <div className="test"></div>
    </>
  )
}

export default Index