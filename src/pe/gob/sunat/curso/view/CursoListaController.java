package pe.gob.sunat.curso.view;

import org.controlsfx.dialog.Dialogs;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import pe.gob.sunat.curso.MainApp;
import pe.gob.sunat.curso.model.Curso;

/**
 * 
 * @author John
 *
 */
public class CursoListaController {
	
	@FXML 
	private TableView<Curso> cursoTable;
	
	@FXML 
	private TableColumn<Curso, String> codCursoColumn;
	
	@FXML 
	private TableColumn<Curso, String> nomCursoColumn;
	
	@FXML 
	private Label codCursoLabel;
	
	@FXML 
	private Label nomCursoLabel;
	
	@FXML 
	private Label credCursoLabel;
	
	@FXML 
	private Label hrsTeoriaLabel;
	
	@FXML 
	private Label hrsPractLabel;
	
	@FXML 
	private Label hrsLabLabel;
	
	@FXML 
	private Label cicloLabel;
	
	@FXML 
	private Label tipoCursoLabel;
	
	private MainApp mainApp;
	
	
	public CursoListaController() {
		// TODO Auto-generated constructor stub
	}
	
	
	@FXML
	private void initialize() {
		codCursoColumn.setCellValueFactory(cellData-> cellData.getValue().codCursoProperty());
		nomCursoColumn.setCellValueFactory(cellData-> cellData.getValue().nomCursoProperty());
		
		mostrarDatosCurso(null);
		
		cursoTable.getSelectionModel()
		.selectedItemProperty() 
		.addListener((observable, oldValue,newValue )->mostrarDatosCurso(newValue)); 
	}
	
	
	public void mostrarDatosCurso(Curso curso) {
		if(curso!=null) {
			codCursoLabel.setText(curso.getCodCurso());
			nomCursoLabel.setText(curso.getNomCurso());
			credCursoLabel.setText(curso.getCredCurso().toString());
			hrsTeoriaLabel.setText(curso.getHrsTeoria().toString());
			hrsPractLabel.setText(curso.getHrsPract().toString());
			hrsLabLabel.setText(curso.getHrsLab().toString());
			cicloLabel.setText(curso.getCiclo().toString());
			tipoCursoLabel.setText(curso.getTipoCurso().toString());
		}else {
			codCursoLabel.setText("");
			nomCursoLabel.setText("");
			credCursoLabel.setText("");
			hrsTeoriaLabel.setText("");
			hrsPractLabel.setText("");
			hrsLabLabel.setText("");
			cicloLabel.setText("");
			tipoCursoLabel.setText("");
		}
	}
	
	@FXML
	private void handleEstadisticas() {
		mainApp.mostrarEstadisticas();
	}
	
	@FXML
	private void handleSalir() {
		System.exit(0);
	}
	
	@FXML
	private void handleAcercaDe() {
		 Dialogs
			.create()
			.title("Administración de Cursos")
			.masthead("Proyecto Curso Java FX SUNAT")
			.message("Autor: John Eddie Quispe Coila\nVersión: 1.0\nFecha: 21/12/2017")
			.showInformation();
	}
	 
	public void setMainApp(MainApp mainApp) {
		this.mainApp = mainApp;
		cursoTable.setItems(this.mainApp.getCursoData());
	}
	
}
