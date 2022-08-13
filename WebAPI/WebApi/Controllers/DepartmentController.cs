using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using WebApi.Models;

namespace WebApi.Controllers
{
	[Route("api/department")]
	[ApiController]
	public class DepartmentController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public DepartmentController(IConfiguration configuration)
		{
			_configuration = configuration;
		}


		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select DepartmentId, DepartmentName from dbo.Department";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("EmployeeApp");
			SqlDataReader myReader;
			using (SqlConnection myConn = new SqlConnection(sqlDataSource))
			{
				myConn.Open();
				using (SqlCommand myCommand = new SqlCommand(query, myConn))
				{
					myReader = myCommand.ExecuteReader();
					table.Load(myReader);
					myReader.Close();
					myConn.Close();
				}
			}
			return new JsonResult(table);
		}

		[HttpPost] 
		public JsonResult Post(Department department)
		{
			string query = @"insert into dbo.Department values
							('"+department.DepartmentName+@"')";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("EmployeeApp");
			SqlDataReader myReader;
			using (SqlConnection myConn = new SqlConnection(sqlDataSource))
			{
				myConn.Open();
				using (SqlCommand myCommand = new SqlCommand(query, myConn))
				{
					myReader = myCommand.ExecuteReader();
					table.Load(myReader);
					myReader.Close();
					myConn.Close();
				}
			}
			return new JsonResult("Added Successfully");
		}

		[HttpPut]
		public JsonResult Put(Department department)
		{
			string query = @"update dbo.Department set DepartmentName ='"
							+ department.DepartmentName + @"' 
							where DepartmentId ="+department.DepartmentId;
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("EmployeeApp");
			SqlDataReader myReader;
			using (SqlConnection myConn = new SqlConnection(sqlDataSource))
			{
				myConn.Open();
				using (SqlCommand myCommand = new SqlCommand(query, myConn))
				{
					myReader = myCommand.ExecuteReader();
					table.Load(myReader);
					myReader.Close();
					myConn.Close();
				}
			}
			return new JsonResult("Added Successfully");
		}
	}
}
